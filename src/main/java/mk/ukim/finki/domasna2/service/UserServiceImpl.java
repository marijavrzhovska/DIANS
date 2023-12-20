package mk.ukim.finki.domasna2.service;

import mk.ukim.finki.domasna2.model.User;
import mk.ukim.finki.domasna2.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    private final UserRepository repository;

    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }
    @Override
    public User save(User user){
        return repository.save(user);
    }

    @Override
    public List<User> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<User> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public List<User> findByUsername(String username) {
        return repository.findByUsername(username);
    }

    @Override
    public List<User> findByEmail(String email) {
        return repository.findByEmail(email);
    }
}
