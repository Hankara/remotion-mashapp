import React, { useState } from "react";
import { Composition } from 'remotion';
import { Header } from "./components/Header";
import { Users } from './components/Users';
import { useFetchUsers } from "./useFetchUsers";

const FPS = 30;
const WIDTH = 1920;
const HEIGHT = 1080;

export const RemotionVideo: React.FC = () => {
	const [userCount, setUserCount] = useState(3);
	const [duration, setDuration] = useState(3);
	const { users } = useFetchUsers(userCount);

	if (!users) return null;

	return (
		<>
			<Header userCount={userCount} duration={duration} setUserCount={setUserCount} setDuration={setDuration} />
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

