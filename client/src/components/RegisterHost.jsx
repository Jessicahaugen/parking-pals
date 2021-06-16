import React from "react";
import "../App.css";
import "../css/RegisterHost.css";

export default function RegisterHost() {
	return (
		<div id="register-section">
			<div className="host-wrapper">
				<h1>Register to Host Now</h1>
				<div id="register-host-form">
					<input
						class="register-input"
						id="first-name"
						type="text"
						placeholder="First Name"
					/>
					<input
						class="register-input"
						id="last-name"
						type="text"
						placeholder="Last Name"
					/>
					<input
						class="register-input"
						id="email"
						type="email"
						placeholder="Email Address"
					/>
					<input
						class="register-input"
						id="spots"
						type="number"
						placeholder="Number of Parking Spots"
					/>
					<input
						class="register-input"
						id="street"
						type="text"
						placeholder="Street Address"
					/>
					<input
						class="register-input"
						id="city"
						type="text"
						placeholder="City"
					/>
					<input
						class="register-input"
						id="state"
						type="text"
						placeholder="State"
					/>
					<input
						class="register-input"
						id="zip"
						type="text"
						placeholder="Zip Code"
					/>
					<input
						class="register-input"
						type="number"
						placeholder="Hourly Parking Rate"
					/>
					<input
						class="register-input"
						id="description"
						type="textarea"
						placeholder="Driveway Description"
					/>
					<button class="register-button" id="submit-button">
						Submit Form
					</button>
				</div>
			</div>
		</div>
	);
}
