import { Avatar, Box, FormControl, IconButton, Link, Typography } from "@mui/material"


import * as React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


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

function App() {
	return (
		<Box>
			
			<div>
				<ImageList sx={{ width: 500, height: 500 }}
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
	);
}

export default App;
