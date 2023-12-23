package mk.ukim.finki.domasna2.service.implementation;

import mk.ukim.finki.domasna2.model.enumerations.UserStatus;
import mk.ukim.finki.domasna2.model.User;
import mk.ukim.finki.domasna2.model.exceptions.*;
import mk.ukim.finki.domasna2.repository.UserRepository;
import mk.ukim.finki.domasna2.service.AuthService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    private boolean credentialsInvalid(String username, String password) {
        return username == null || password == null || username.isEmpty() || password.isEmpty();
    }

    @Override
    public User login(String username, String password) {
        if (credentialsInvalid(username, password)) {
            throw new InvalidArgumentsException();
        }

        User user =  userRepository.findByUsernameAndPassword(username, password)
                .orElseThrow(InvalidUserCredentialsException::new);
        user.setStatus(UserStatus.LOGGED_IN);
        return this.userRepository.save(user);
    }

    @Override
    public User register(String username, String password, String repeatPassword, String name, String surname) {
        if (credentialsInvalid(username, password)) {
            throw new InvalidArgumentsException();
        }

        if (!password.equals(repeatPassword)) {
            throw new PasswordsDoNotMatchException();
        }

        if(this.userRepository.findByUsername(username).isPresent()){
            throw new UsernameAlreadyExistsException(username);
        }


        String passwordEncoder = this.passwordEncoder.encode(password);

        User user = new User(username, name, surname, passwordEncoder);
        return userRepository.save(user);
    }

    @Override
    public void logout(String username) {
        User user = this.userRepository.findByUsername(username).get();
        user.setStatus(UserStatus.LOGGED_OUT);
        this.userRepository.save(user);
    }

    @Override
    public List<User> findAll() {
        return this.userRepository.findAll();
    }
}
