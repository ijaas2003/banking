import { formatAmount } from "@/lib/utils";
import Animated from "./AnimatedCountup";
import Doughnuts from "./Dougnut";

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotlaBalanceBoxProps) => {
	return (
		<section className="total-balance">
			<div className="total-balance-chart">
				<Doughnuts accounts={accounts}/>
			</div>
			<div className="flex flex-col gap-6">
				<h2 className="header-2">
					Bank Accounts: { totalBanks }
				</h2>
				<div className="flex flex-col gap-2">
					<p>
						Total current Balance
					</p>
					<div className="total-balance-amount flex-center gap-2">
						
						<Animated amount={totalCurrentBalance}/>
						
					</div>
				</div>
			</div>
		</section>
	)
}
export default TotalBalanceBox;