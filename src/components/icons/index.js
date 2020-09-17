import Search from "./Search";
import React from "react";

export default function Icon(props) {
	switch (props.name) {
		case "Search":
			return <Search />;

		default:
			return null;
	}
}
