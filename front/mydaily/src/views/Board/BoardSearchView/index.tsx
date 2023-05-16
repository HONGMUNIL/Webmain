import { Avatar, Box, FormControl, IconButton, InputAdornment, Link, OutlinedInput, Typography } from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';
import { KeyboardEvent, useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "src/stores";




const data = [
	{
		link:
			'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
	},
	{
		link:
			'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
	},
	{
		link:
			'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
	},
	{
		link:
			'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
	},
	{
		link:
			'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
	},
	{
		link:
			'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
	},
	{
		link:
			'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
	},
	{
		link:
			'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
	},
	{
		link:
			'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
	},

]


export default function BoardSearchTag() {

	//          Hook          //
	const navigator = useNavigate();
	const path = useLocation();

	const { user } = useUserStore();

	const [tag, setTag] = useState<string>('');

	//          Event Handler          //
	const onSearchKeyPressHandler = (event: KeyboardEvent<HTMLDivElement>) => {
		if (event.key !== 'Enter') return;
		onSearchHandler();
	}

	const onSearchHandler = () => {
		if (!tag.trim()) {
			alert('검색어를 입력하세요.');
			return;
		}

		navigator(`/board/search-tag/${tag}`);
	}
	return (
		<>
			<Box>
				<FormControl variant='outlined' sx={{ mr: '10px' }}>
					<OutlinedInput
						size='small'
						type='text'
						placeholder='검색어를 입력해주세요.'
						endAdornment={
							<InputAdornment position='end'>
								<IconButton edge='end' onClick={onSearchHandler}>
									<SearchIcon />
								</IconButton>
							</InputAdornment>
						}
						onChange={(event) => setTag(event.target.value)}
						onKeyPress={(event) => onSearchKeyPressHandler(event)}
					/>
				</FormControl>
			</Box>

			<Box>
				<div>
					<ImageList sx={{ width: 500, height: 500, alignItems: 'center', padding: 25 }}
						cols={3} rowHeight={170}>
						{data.map((item) => (
							<ImageListItem key={item.link} >
								<img
									src={`${item.link}?w=
								164&h=164&fit=crop&auto=format`}
									srcSet={`${item.link}?w=
								164&h=164&fit=crop&auto=format&dpr=2 2x`}
								/>
							</ImageListItem>
						))}
					</ImageList>
				</div>
			</Box>
			</>
			);
};
