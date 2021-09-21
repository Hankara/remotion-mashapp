import React, { useState } from "react";
import { Composition, getInputProps } from 'remotion';
//import { Header } from "./components/Header";
import { Users } from './components/Users';
import { useFetchUsers } from "./useFetchUsers";

const FPS = 30;
const WIDTH = 1920;
const HEIGHT = 1080;

const defaultProps = {
  renderUserCount: 3,
  durationPerUserInSeconds: 2,
};
const inputProps = { ...defaultProps, ...getInputProps() };

export const RemotionVideo: React.FC = () => {
  const { renderUserCount, durationPerUserInSeconds } = inputProps;
	const [userCount, setUserCount] = useState(renderUserCount);
	const [duration, setDuration] = useState(durationPerUserInSeconds);
	const { users } = useFetchUsers(userCount);

	return (
		<>
			{/*<Header userCount={userCount} duration={duration} setUserCount={setUserCount} setDuration={setDuration} />*/}
			<Composition
        id="Users"
        component={Users}
        durationInFrames={(duration * FPS * userCount) > 0 ? Math.round(duration * FPS * userCount) : 1}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          users,
          duration,
        }}
			/>
		</>
	);
};

