import { useState, useEffect } from "react";
import axios from "axios";
export const useFetch = (url: string, token: any) => {
	const [data, setData] = useState<any>();
	const [loading, setLoading] = useState<Boolean>(true);
	const [error, setError] = useState<any>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				await axios
					.get(url, {
						headers: {
							"Content-Type": "application/json",
							responseType: "json",
							"X-Requested-With": "XMLHttpRequest",
							Accept: "*/*",
							Authorization: `Bearer ${token}`,
						},
					})
					.then((res) => {
						setData(res.data);
						console.log(res.data);
					});
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};
		fetchData();
	}, [url, token]);

	return { data, loading, error };
};
