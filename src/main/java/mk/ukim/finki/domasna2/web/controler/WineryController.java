package mk.ukim.finki.domasna2.web.controler;

import mk.ukim.finki.domasna2.model.Winery;
import mk.ukim.finki.domasna2.service.WineryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api")
@Validated
@CrossOrigin(origins="*")
public class WineryController {
    private final WineryService wineryService;

    public WineryController(WineryService wineryService)
    {
        this.wineryService = wineryService;
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<Winery>> getWineries()
    {
        return new ResponseEntity<List<Winery>>(wineryService.findAll(), HttpStatus.OK);
    }


    @GetMapping(value = "/{id}")
    public ResponseEntity<Winery> getWineryById(@PathVariable Long id)
    {
        Optional<Winery> winery = wineryService.findById(id);
        return winery.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value="/name/{name}")
    public ResponseEntity<List<Winery>> getWineryByName(@PathVariable(value="name")String name){
        return new ResponseEntity<>(wineryService.findByName(name),HttpStatus.OK);
    }
    @GetMapping(value="/city/{city}")
    public ResponseEntity<List<Winery>> getWineryByCity(@PathVariable(value="city")String city){
        return new ResponseEntity<>(wineryService.findByCity(city),HttpStatus.OK);
    }
}
