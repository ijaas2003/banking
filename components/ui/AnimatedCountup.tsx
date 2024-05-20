'use client'
import CountUp from "react-countup";
const Animated = ({ amount }: {amount: number}) => {
	return (
		<div className="w-full">
			<CountUp end={amount} decimal="," prefix="$" duration={2}/>
		</div>
	)
}

export default Animated;