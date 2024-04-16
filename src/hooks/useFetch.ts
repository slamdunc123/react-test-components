import { useCallback, useEffect, useState } from 'react';

export const useFetch = (url: string) => {
	const [data, setData] = useState([]);

	const fetchData = useCallback(async () => {
		const res = await fetch(url);
		const data = await res.json();
		setData(data);
	}, [url]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { data };
};
