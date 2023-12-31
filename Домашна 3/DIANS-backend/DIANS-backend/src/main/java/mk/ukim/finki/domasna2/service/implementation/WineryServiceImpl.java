package mk.ukim.finki.domasna2.service.implementation;

import jakarta.transaction.Transactional;
import mk.ukim.finki.domasna2.model.*;
import mk.ukim.finki.domasna2.model.exceptions.*;
import mk.ukim.finki.domasna2.repository.*;
import mk.ukim.finki.domasna2.service.WineryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WineryServiceImpl implements WineryService{
    private final WineryRepository wineryRepository;
    private final CommentRepository commentRepository;
    private final RatingRepository ratingRepository;
    private final UserRepository userRepository;

    public WineryServiceImpl(WineryRepository wineryRepository, CommentRepository commentRepository,
                             RatingRepository ratingRepository, UserRepository userRepository)
    {
        this.wineryRepository = wineryRepository;
        this.commentRepository = commentRepository;
        this.ratingRepository = ratingRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<Winery> findAll()
    {
        return wineryRepository.findAll();
    }

    @Override
    public Optional<Winery> findById(Long id)
    {
        Winery winery = wineryRepository.findById(id).orElseThrow(() -> new WineryDoesNotExistsException(id));
        return Optional.of(winery);
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
    @Transactional
    public Optional<Winery> addCommentToWinery(Long id, String username, String commentText) {
        Winery winery = this.wineryRepository.findById(id).orElseThrow(() -> new WineryDoesNotExistsException(id));
        User user = this.userRepository.findByUsername(username).orElseThrow(() -> new InvalidUsernameException(username));

        Comment newComment = new Comment(commentText);
        newComment.setWinery(winery);
        this.commentRepository.save(newComment);

        user.getComments().add(newComment);
        this.userRepository.save(user);

        winery.getComments().add(newComment);
        this.wineryRepository.save(winery);

        return findById(winery.getId());

    }

    @Override
    @Transactional
    public Optional<Winery> addRatingToWinery(Long wineryId, Integer rate)
    {
        Winery winery = this.wineryRepository.findById(wineryId).orElseThrow(() -> new WineryDoesNotExistsException(wineryId));
//        User user = this.userService.findByUsername(username);

        Rate newRate = new Rate(rate);
        newRate.setWinery(winery);
        this.ratingRepository.save(newRate);

//        user.getRates().add(newRate);
//        this.userService.save(user);

        winery.getRates().add(newRate);
        int sumRates = winery.getRates().stream().mapToInt(Rate::getRate).sum();
        winery.setRating((double)sumRates/winery.getRates().size());

        this.wineryRepository.save(winery);

        return findById(winery.getId());
    }

    @Override
    public List<Comment> getCommentsForWinery(Long wineryId) {
        Winery winery = this.wineryRepository.findById(wineryId).orElseThrow(() -> new WineryDoesNotExistsException(wineryId));
        return commentRepository.findAllByWinery(winery);
    }
}
