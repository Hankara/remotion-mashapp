import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import { RandomUsersApiResponse, Result } from '../interface';
import { NameText } from './Name';
import { User } from './User';
import { Frame } from './Frame';

interface Props {
  users: RandomUsersApiResponse | null;
  duration: number;
}

const STANDART_FRAME = 25;
const IMAGE_FRAME_SKIP = 10;
const DivStyle = {
  flex: 1, 
  backgroundColor: 'white'
}

export const Users: React.FC<Props> = ({users, duration}) => {
	const transitionStart = Math.round(STANDART_FRAME * duration);
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	let imageTransitionVal = transitionStart * -1;
	return (
		<div style={DivStyle}>
			<div style={{opacity}}>
				<Frame />
				{users && users.results.map((user: Result) => {
        imageTransitionVal += transitionStart;
        const nameTransVal = imageTransitionVal + IMAGE_FRAME_SKIP;
        return (
          <div>
            <Sequence key={imageTransitionVal} from={imageTransitionVal} durationInFrames={videoConfig.durationInFrames}>
              <User key={user.phone} imageSource={user.picture.large} imageAlt={user.picture.large} />
            </Sequence>
            <Sequence key={nameTransVal} from={nameTransVal} durationInFrames={videoConfig.durationInFrames}>
              <NameText key={user.name.first+user.name.last} name={user.name} />
            </Sequence>
          </div>
        );
      })}
			</div>
		</div>
	);
};
