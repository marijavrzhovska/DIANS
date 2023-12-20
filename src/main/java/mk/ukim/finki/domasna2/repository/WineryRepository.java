package mk.ukim.finki.domasna2.repository;

import mk.ukim.finki.domasna2.model.Winery;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface WineryRepository extends JpaRepository<Winery, Long> {
    @Override
    List<Winery> findAll();

    @Override
    Optional<Winery> findById(Long id);

    List<Winery> findByName(String name);
    List<Winery> findByCity(String city);

}
