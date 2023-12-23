package mk.ukim.finki.domasna2.repository;

import mk.ukim.finki.domasna2.model.Winery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WineryRepository extends JpaRepository<Winery, Long> {
    @Override
    List<Winery> findAll();

    @Override
    Optional<Winery> findById(Long id);

    List<Winery> findByNameContaining(String name);
    List<Winery> findByCityContaining(String city);

}
