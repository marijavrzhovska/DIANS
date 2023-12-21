package mk.ukim.finki.domasna2.service.implementation;

import mk.ukim.finki.domasna2.model.*;
import mk.ukim.finki.domasna2.model.exceptions.*;
import mk.ukim.finki.domasna2.repository.*;
import mk.ukim.finki.domasna2.service.UserService;
import mk.ukim.finki.domasna2.service.WineryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WineryServiceImpl implements WineryService{
    private final WineryRepository wineryRepository;
    private final CommentRepository commentRepository;
    private final RatingRepository ratingRepository;
    private final UserService userService;

    public WineryServiceImpl(WineryRepository wineryRepository, CommentRepository commentRepository,
                             RatingRepository ratingRepository, UserService userService)
    {
        this.wineryRepository = wineryRepository;
        this.commentRepository = commentRepository;
        this.ratingRepository = ratingRepository;
        this.userService = userService;
    }

    @Override
    public List<Winery> findAll()
    {
        return wineryRepository.findAll();
    }

    @Override
    public Optional<Winery> findById(Long id)
    {
        return wineryRepository.findById(id);
    }

    @Override
    public List<Winery> findByName(String name) {
        return wineryRepository.findByName(name);
    }

    @Override
    public List<Winery> findByCity(String city) {
        return wineryRepository.findByCity(city);
    }

    @Override
    public Optional<Winery> addCommentToWinery(Long id, String commentText) {
        Winery winery = this.wineryRepository.findById(id).orElseThrow(() -> new WineryDoesNotExistsException(id));

        Comment newComment = new Comment(commentText);
        newComment.setWinery(winery);
        this.commentRepository.save(newComment);

        winery.getComments().add(newComment);
        this.wineryRepository.save(winery);

        return Optional.of(winery);
    }

    @Override
    public Optional<Winery> addRatingToWinery(Long wineryId, String username, Integer rate) {
        Winery winery = this.wineryRepository.findById(wineryId).orElseThrow(() -> new WineryDoesNotExistsException(wineryId));
        User user = this.userService.findByUsername(username);

        Rate newRate = new Rate(rate);
        newRate.setWinery(winery);
        newRate.setUser(user);
        this.ratingRepository.save(newRate);

        winery.getRates().add(newRate);
        int sumRates = winery.getRates().stream().mapToInt(r -> rate).sum();
        winery.setRating((double)sumRates/winery.getRates().size());
        this.wineryRepository.save(winery);

        user.getRates().add(newRate);
        this.userService.save(user);

        return Optional.of(winery);
    }


}
