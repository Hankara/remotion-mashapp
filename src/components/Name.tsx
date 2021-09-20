import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import { Name } from '../interface';

export const NameText: React.FC<{
	name: Name;
}> = ({name}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
  const nameText = name.first + " " + name.last;
	const text = nameText.split(' ').map((t) => ` ${t} `);
	
	return (
		<h1
			style={{
				fontFamily: 'SF Pro Text, Helvetica, Arial',
				fontWeight: 'bold',
				fontSize: 160,
				textAlign: 'center',
				textShadow: '5px 5px 10px black',
				position: 'absolute',
				bottom: 0,
				width: '100%',
			}}
		>
			{text.map((t, i) => {
				return (
					<span
						key={t}
						style={{
							color: 'white',
							marginLeft: 10,
							marginRight: 10,
							transform: `scale(${spring({
								fps: videoConfig.fps,
								frame: frame - i * 5,
								config: {
									damping: 100,
									stiffness: 200,
									mass: 0.5,
								},
							})})`,
							display: 'inline-block',
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
