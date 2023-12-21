package mk.ukim.finki.domasna2.service.implementations;

import mk.ukim.finki.domasna2.model.User;
import mk.ukim.finki.domasna2.model.exceptions.InvalidUsernameException;
import mk.ukim.finki.domasna2.repository.UserRepository;
import mk.ukim.finki.domasna2.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User findByUsername(String username) {
        return this.userRepository.findByUsername(username).orElseThrow(() -> new InvalidUsernameException(username));
    }

    @Override
    public User save(User user) {
        return this.userRepository.save(user);
    }
}
