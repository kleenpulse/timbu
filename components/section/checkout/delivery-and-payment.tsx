import MasterCardIcon from "@/components/icons/master-card-icon";
import VisaCardIcon from "@/components/icons/visa-card-icon";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type Props = {};
const INPUTS = [
	{
		name: "first_name",
		label: "First Name",
	},
	{
		name: "last_name",
		label: "Last Name",
	},
	{
		name: "email",
		label: "Email",
	},
	{
		name: "phone",
		label: "Phone",
	},
	{
		name: "address",
		label: "Address",
	},
];

const DeliveryAndPayment = (props: Props) => {
	const [paymentMethod, setPaymentMethod] = useState<"card" | "transfer">(
		"card"
	);
	const [formState, setFormState] = useState({
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		address: "",
		card_number: "",
		cvv: "",
		expiry_date: "",
	});
	const disable_payment_input = paymentMethod === "transfer";

	// Handle input change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setFormState((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formState);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full flex flex-col max-w-[548px] mt-10 lg:mt-20 mb-20 lg:mb-32 xl:mb-44"
		>
			<div className="flex flex-col">
				<div className="px-2 lg:px-4 bg-accent-white py-2 lg:py-3">
					<p className="text-xl lg:text-2xl">Delivery</p>
				</div>
				<div className="flex flex-col mt-4 lg:mt-8 gap-y-5 md:gap-y-7">
					{INPUTS.map((input) => (
						<div key={input.name}>
							<input
								className=" appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent"
								id={input.name}
								name={input.name}
								type={input.name === "email" ? "email" : "text"}
								placeholder={input.label}
								onChange={handleChange}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col mt-8 lg:mt-12">
				<div className="px-2 lg:px-4 bg-accent-white py-2 lg:py-3">
					<p className="text-xl lg:text-2xl">Payment</p>
				</div>
				<p className="mt-2 mb-4">Choose your payment method</p>

				<div className="flex flex-col gap-y-2">
					<button
						type="button"
						onClick={() => setPaymentMethod("card")}
						className={cn(
							"flex w-full items-center justify-between border-[5px] border-accent-white bg-transparent p-2 transition-all",
							paymentMethod === "card"
								? "border-accent-white duration-500"
								: "border-[#eee] duration-300"
						)}
					>
						<div className="flex items-center gap-x-2">
							<span
								className={cn(
									"size-5 border-[5px]  rounded-full transition-all ",
									paymentMethod === "card"
										? "border-accent-border duration-300"
										: "border-accent-white duration-500"
								)}
							/>
							<span>Credit Card</span>
						</div>
						<div className="flex items-center gap-x-2">
							<VisaCardIcon />
							<MasterCardIcon />
						</div>
					</button>
					<div>
						<input
							className=" appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent disabled:cursor-not-allowed disabled:opacity-90"
							id="card_number"
							name="card_number"
							type="text"
							disabled={disable_payment_input}
							required
							max={16}
							placeholder="Card Number"
							onChange={handleChange}
						/>
					</div>
					<div className="flex items-center justify-between gap-x-6 mt-2">
						<input
							className=" appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent disabled:cursor-not-allowed disabled:opacity-90"
							id="cvv"
							name="cvv"
							type="text"
							required
							disabled={disable_payment_input}
							max={3}
							placeholder="CVV"
							onChange={handleChange}
						/>
						<input
							className=" appearance-none border rounded w-full py-2 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent disabled:cursor-not-allowed disabled:opacity-90"
							id="expiry_date"
							name="expiry_date"
							type="text"
							disabled={disable_payment_input}
							required
							placeholder="Expiry Date"
							onChange={handleChange}
						/>
					</div>
					<button
						type="button"
						onClick={() => setPaymentMethod("transfer")}
						className={cn(
							"flex w-full items-center justify-between border-[5px]  bg-transparent p-2 mt-10 transition-all",
							paymentMethod === "transfer"
								? "border-accent-white duration-500"
								: "border-[#eee] duration-300"
						)}
					>
						<div className="flex items-center gap-x-2">
							<span
								className={cn(
									"size-5 border-[5px]  rounded-full transition-all ",
									paymentMethod === "transfer"
										? "border-accent-border duration-300"
										: "border-accent-white duration-500"
								)}
							/>
							<span>Transfer</span>
						</div>
					</button>
				</div>
				<button
					type="submit"
					className="w-full mt-10 lg:mt-20 bg-accent-orange hover:bg-accent-primary text-white md:text-xl py-2 px-4 md:py-3 md:px-6 "
				>
					Pay Now
				</button>
			</div>
		</form>
	);
};

export default DeliveryAndPayment;
