package mk.ukim.finki.domasna2.repository;

import mk.ukim.finki.domasna2.model.User;
import mk.ukim.finki.domasna2.model.Winery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    @Override
    List<User> findAll();

    @Override
    Optional<User> findById(Long id);

    List<User> findByUsername(String username);
    List<User> findByEmail(String email);
}
