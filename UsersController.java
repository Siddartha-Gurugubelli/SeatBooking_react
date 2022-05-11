package com.controller;



import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.exception.UserNotFoundException;
import com.model.OfficeDAO;
import com.model.Users;
import com.model.UsersDAO;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UsersController {

	@Autowired
	UsersDAO usersDAO;
	@Autowired
	OfficeDAO officeDAO;
	
	@GetMapping("/homes")
	public String getHome() {
		
		return "Hello User";
	}
	@PostMapping("/userlogin")
	public String userLogin(@RequestBody Map<String, String> user) {
		String userName = user.getOrDefault("userName", null);
		String password = user.getOrDefault("password", null);
		System.out.println("Username: "+userName);
		Optional<Users> opt=usersDAO.findByUserName(userName);
		System.out.println("Admin password: "+opt.get().getPassword());
		if(opt.isPresent() && opt.get().getPassword().equals(password)) {
			return "user login success";
		} else {
			throw new RuntimeException("Incorrect Details");
		}	
	}
	
	@PostMapping("/registeruser")
	public String registerUser(@RequestBody Users users) {
		usersDAO.save(users);	
		return "User Successfully Registered";
	}
	@PatchMapping("/modifydetails")
	public String updateDetails(@RequestBody Users users) {
		usersDAO.save(users);
		return "user details updated";
	}
	@DeleteMapping("/deleteuser/{id}")
	public String deleteUser(@PathVariable("id") int uId ) {
		usersDAO.deleteById(uId);
		return "UserDeleted";
		
	}
	@GetMapping("/findfloor/{id}")
	public String findFloor(@PathVariable("id")int floorNo ) {
		officeDAO.findById(floorNo);
		return "floorFound";
	}
	@GetMapping("/finduser/{id}") 
	public Optional<Users> getUser(@PathVariable int id) {
		Optional<Users> opt=usersDAO.findById(id);
		if(!opt.isPresent()) {
			throw new UserNotFoundException();
		}
		return usersDAO.findById(id);
	}
	@GetMapping("/finduser/{userName}") 
	public Optional<Users> getUser(@PathVariable String userName) {
		Optional<Users> opt=usersDAO.findByUserName(userName);
		if(!opt.isPresent()) {
			throw new UserNotFoundException();
		}
		return usersDAO.findByUserName(userName);
	}
	
	
	
}
