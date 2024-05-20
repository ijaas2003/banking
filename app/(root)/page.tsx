import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import HeaderBox from "@/components/ui/header";
import React from "react";

const Home = () => {
	const Loggedin = { firstname: 'ijaas' }
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox 
						type="greeting"
						title="welcome"
						subtext="Access and manage your account and transactions efficiently"
						user = {Loggedin?.firstname || 'Guest'}
					/>

					<TotalBalanceBox 
						accounts={[]}
						totalBanks = {1}
						totalCurrentBalance = {1250.35}
					/>
				</header>
			</div>
		</section>
	)
}

export default Home;