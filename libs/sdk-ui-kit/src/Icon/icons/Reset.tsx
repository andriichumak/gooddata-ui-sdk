// (C) 2021 GoodData Corporation
import React from "react";

import { IIconProps } from "../typings.js";

/**
 * @internal
 */
export const Reset: React.FC<IIconProps> = ({ color, className, width, height }) => {
    return (
        <svg
            className={className}
            width={width ?? 16}
            height={height ?? 16}
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M16.3633 3.5332C16.791 3.96094 17.166 4.4209 17.4883 4.91309C17.8164 5.39941 18.0918 5.91211 18.3145 6.45117C18.543 6.99023 18.7129 7.5498 18.8242 8.12988C18.9414 8.70996 19 9.29883 19 9.89648C19 10.5 18.9414 11.0918 18.8242 11.6719C18.7129 12.2461 18.543 12.8027 18.3145 13.3418C18.0918 13.8809 17.8164 14.3965 17.4883 14.8887C17.166 15.3809 16.791 15.8379 16.3633 16.2598C15.9414 16.6875 15.4844 17.0654 14.9922 17.3936C14.5 17.7217 13.9844 17.9971 13.4453 18.2197C12.9062 18.4424 12.3467 18.6094 11.7666 18.7207C11.1924 18.8379 10.6035 18.8965 10 18.8965C9.17383 18.8965 8.36816 18.7852 7.58301 18.5625C6.80371 18.3457 6.07129 18.0352 5.38574 17.6309C4.7002 17.2207 4.07324 16.7227 3.50488 16.1367C2.94238 15.5508 2.46484 14.8916 2.07227 14.1592C2.01367 14.0537 2.00195 13.9424 2.03711 13.8252C2.07227 13.7021 2.14551 13.6113 2.25684 13.5527C2.3623 13.4941 2.47363 13.4824 2.59082 13.5176C2.71387 13.5527 2.80469 13.626 2.86328 13.7373C3.2207 14.3936 3.65137 14.9854 4.15527 15.5127C4.66504 16.04 5.22754 16.4883 5.84277 16.8574C6.45801 17.2266 7.11719 17.5107 7.82031 17.71C8.5293 17.9033 9.25586 18 10 18C11.1191 18 12.168 17.7891 13.1465 17.3672C14.1309 16.9395 14.9893 16.3594 15.7217 15.627C16.46 14.8945 17.04 14.0361 17.4619 13.0518C17.8896 12.0674 18.1035 11.0156 18.1035 9.89648C18.1035 8.7832 17.8896 7.73438 17.4619 6.75C17.04 5.76562 16.46 4.90723 15.7217 4.1748C14.9893 3.44238 14.1309 2.86523 13.1465 2.44336C12.168 2.01562 11.1191 1.80176 10 1.80176C9.36133 1.80176 8.7373 1.875 8.12793 2.02148C7.52441 2.16211 6.94727 2.37012 6.39648 2.64551C5.8457 2.9209 5.33008 3.25488 4.84961 3.64746C4.375 4.04004 3.94727 4.48535 3.56641 4.9834L4.90234 4.52637C5.01953 4.48535 5.13379 4.49414 5.24512 4.55273C5.35645 4.60547 5.43262 4.69043 5.47363 4.80762C5.51465 4.9248 5.50586 5.03906 5.44727 5.15039C5.39453 5.26172 5.30957 5.33789 5.19238 5.37891L3.84766 5.83594L2.62598 6.24902C2.58496 6.2666 2.54102 6.27539 2.49414 6.27539C2.45312 6.27539 2.41211 6.26953 2.37109 6.25781C2.27148 6.23437 2.18945 6.18164 2.125 6.09961C2.06055 6.01758 2.02832 5.92676 2.02832 5.82715V3.14648C2.02832 3.02344 2.07227 2.91797 2.16016 2.83008C2.24805 2.74219 2.35645 2.69824 2.48535 2.69824C2.6084 2.69824 2.71387 2.74219 2.80176 2.83008C2.88965 2.91797 2.93359 3.02344 2.93359 3.14648V4.32422C3.35547 3.79102 3.83008 3.31348 4.35742 2.8916C4.88477 2.46387 5.4502 2.10352 6.05371 1.81055C6.65723 1.51758 7.29004 1.29199 7.95215 1.13379C8.62012 0.975586 9.30273 0.896484 10 0.896484C10.6035 0.896484 11.1924 0.955078 11.7666 1.07227C12.3467 1.18945 12.9062 1.35938 13.4453 1.58203C13.9844 1.80469 14.5 2.08008 14.9922 2.4082C15.4844 2.73633 15.9414 3.11133 16.3633 3.5332Z"
                fill={color ?? "#94A1AD"}
            />
        </svg>
    );
};