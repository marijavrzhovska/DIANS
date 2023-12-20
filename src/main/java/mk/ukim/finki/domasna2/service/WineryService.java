package mk.ukim.finki.domasna2.service;

import mk.ukim.finki.domasna2.model.Winery;

import java.util.List;
import java.util.Optional;

public interface WineryService {
    List<Winery> findAll();

    Optional<Winery> findById(Long id);

    List<Winery> findByName(String name);
    List<Winery> findByCity(String city);
}
