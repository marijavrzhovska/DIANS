package mk.ukim.finki.domasna2.web.controler;

import mk.ukim.finki.domasna2.model.User;
import mk.ukim.finki.domasna2.model.Winery;
import mk.ukim.finki.domasna2.model.exceptions.WineryDoesNotExistsException;
import mk.ukim.finki.domasna2.service.UserService;
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
    private final UserService userService;

    public WineryController(WineryService wineryService, UserService userService)
    {
        this.wineryService = wineryService;
        this.userService = userService;
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<Winery>> getWineries()
    {
        return new ResponseEntity<>(wineryService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/all/{username}")
    public ResponseEntity<List<Winery>> getWineriesByUsername(@PathVariable String username)
    {
        return new ResponseEntity<>(userService.findByUsername(username).getWineryList(), HttpStatus.OK);
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

    //koga userot ke se logira do vinariite treba da se pojavi kopce Add
    // so koe ke se dodava vinarijata vo listata na vinarii na korisnikot,
    // znaci ova kopce ke se pojavi samo dokolku korinsikot e najaven odnosno
    //samo dokolku go ima kako atribut vo react sesijata
    //vo toj moment se povikuva kontroleort pogore getWineryById i kako path variabla mu se prakja id na vinarijata
    //se otvara nov html kade se pojavuva imeto na vinarijata i pole za komentar, e sega tuka treba i
    // hidden pole kade so value id na vinarijata bidejki ke se vkluci vo post formata
    // koj ke go povika ovoj kontroler commentWinery, mene tuka mi treba idto zatoa neka bide vo hidden input pole vo formata

    @PostMapping("/add-comment")
    public ResponseEntity<String> commentWinery(@RequestParam Long id, @RequestParam String comment){
        try{
            Optional<Winery> winery = wineryService.addCommentToWinery(id, comment);
            return ResponseEntity.ok("Comment added successfully");
        } catch(WineryDoesNotExistsException ex){
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    //istoto sto i za komentar vazi i za rating
    //so toa sto ne mora nova strana nego na stranata za vinarii ako ima najaven korisnik
    // togas da se pokaze dropdown pole na primer so oceni od 1 do 5 i do nego kopce submit
    //treba da se pratat id na vinarijata, username na korisnikot, i izbraniot rate odnosno moze kako
    // i path varijabli no ke vidime so frontendot toa
    @PostMapping("/add-rating")
    public ResponseEntity<String> rateWinery(@RequestParam Long id, @RequestParam Integer rate){
        try{
            Optional<Winery> winery = wineryService.addRatingToWinery(id, rate);
            return ResponseEntity.ok("Rate added successfully");
        } catch(WineryDoesNotExistsException ex){
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }
}
