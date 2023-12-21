package mk.ukim.finki.domasna2.service.implementations;

import mk.ukim.finki.domasna2.model.Winery;
import mk.ukim.finki.domasna2.repository.WineryRepository;
import mk.ukim.finki.domasna2.service.WineryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WineryServiceImpl implements WineryService {
    private final WineryRepository repository;

    public WineryServiceImpl(WineryRepository repository)
    {
        this.repository = repository;
    }

    @Override
    public List<Winery> findAll()
    {
        return repository.findAll();
    }

    @Override
    public Optional<Winery> findById(Long id)
    {
        return repository.findById(id);
    }

    @Override
    public List<Winery> findByName(String name) {
        return repository.findByName(name);
    }

    @Override
    public List<Winery> findByCity(String city) {
        return repository.findByCity(city);
    }


}
