```java
package com.ronnie.mvcdemo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ronnie.mvcdemo.models.Donation;
import com.ronnie.mvcdemo.services.DonationService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/donations")
public class DonationController {
	
	public final DonationService donationServ;
	
	public DonationController(DonationService donationServ) {
		this.donationServ = donationServ;
	}
	
	@GetMapping("/all")
	public String allDonations(Model model) {
		model.addAttribute("allDonations", donationServ.getAll());
		return "donation/showAll.jsp";
	}
	
	@GetMapping("/{id}")
	public String oneDonation(@PathVariable("id") Long id, Model model) {
		Donation donation = donationServ.findOne(id); //backend
		model.addAttribute("donation", donation); //populates the frontend
		return "donation/oneDonation.jsp";
	}
	//render the form
	@GetMapping("/create")
	public String createDonation(@ModelAttribute("donation") Donation donation) {
		return "donation/create.jsp";
	}
	//this sends it to our backend, process the data from client, grab the data from request params
//	@PostMapping("/process/create")
//	public String processCreateDonation(@RequestParam("name") String name, @RequestParam("quantity") Integer quantity, @RequestParam("donor") String donor) {
//		Donation newDonation = new Donation(name, quantity, donor);
//		donationServ.create(newDonation);
//		//don't render on a post, redirect instead
//		return "redirect:/donations/all";
//	}
	@PostMapping("/process/create")
	public String processCreateDonation(@Valid @ModelAttribute("donation") Donation newDonation, BindingResult result) {
		if(result.hasErrors()) {
			return "donation/create.jsp";
		}
		donationServ.create(newDonation);
		return "redirect:/donations/all";
	}
	
	@GetMapping("/edit/{id}")
	public String editDonation(@PathVariable("id") Long id, Model model) {
		Donation donation = donationServ.findOne(id);
		model.addAttribute("donation", donation);
		return "donation/edit.jsp";
	}
	
	@PutMapping("/process/edit/{id}")
	public String processEditDonation(@Valid @ModelAttribute("donation") Donation donation, BindingResult result, @PathVariable("id") Long id, Model model) {
		if(result.hasErrors()) {
			
			return "donations/edit.jsp";
		}
		donationServ.edit(donation);
		return "redirect:/donations/"+id;
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteDonation(@PathVariable("id") Long id) {
		donationServ.deletion(id);
		return "redirect:/donations/all";
	}
}
```