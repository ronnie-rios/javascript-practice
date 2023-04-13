```java
package com.ronnie.mvcdemo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ronnie.mvcdemo.models.Donation;
import com.ronnie.mvcdemo.repositories.DonationRepository;

@Service
public class DonationService {
	private final DonationRepository donationRepo;
	
	public DonationService(DonationRepository donationRepo) {
		this.donationRepo = donationRepo;
	}
	
	public List<Donation> getAll() {
		return donationRepo.findAll();
	}
	
	public Donation create(Donation donation) {
		return donationRepo.save(donation);
	}
	
	public Donation findOne(Long id) {
		Optional<Donation> donation = donationRepo.findById(id);
//		if (donation.isPresent()) {
//			return donation.get(); //takes that instance and puts in the optional obj
//		}
		return donation.isPresent() ? donation.get() : null;
	}
	
	public Donation edit(Donation donation) {
		return donationRepo.save(donation);
	}
	//void to indicate no return
	public void deletion(Long id) {
		donationRepo.deleteById(id);
	}
}
```