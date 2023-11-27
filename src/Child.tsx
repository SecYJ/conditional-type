type Male = {
	gender: "male";
	wallet: number;
};

type Female = {
	gender: "female";
	weight: number;
};

type IProps =
	| {
			name: string;
	  } & (Male | Female);

const Child = (props: IProps) => {
	if (props.gender === "female") {
		const { wallet, weight, name } = props;
		return (
			<div>
				{wallet} {weight} {name}
			</div>
		);
	}

	return <div>fasdf</div>;
};

export default Child;
