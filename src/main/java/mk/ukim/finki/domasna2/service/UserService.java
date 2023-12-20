package mk.ukim.finki.domasna2.service;

import mk.ukim.finki.domasna2.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User save(User user);

    List<User> findAll();

    Optional<User> findById(Long id);

    List<User> findByUsername(String username);
    List<User> findByEmail(String email);
}
