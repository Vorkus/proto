import {Scroll} from "@react-three/drei";
import HomeItem from "./HomeItem";
import {useThree} from "@react-three/fiber";

export default function HomeItems() {
    const { width: w, height: h } = useThree((state) => state.viewport)

    return (
        <Scroll>
            <HomeItem
                url="/proto/home/1/1.jpeg"
                scale={[w / 3, w / 5, 1]}
                position={[-w / 4, 0.5, 0]}
                maxScale={[ w / 4, w / 4]}
                grayscale={0}
            />
            <HomeItem
                url="/proto/home/8/8.jpeg"
                scale={[w / 8, w / 8, 1]}
                position={[w / 15, 2, 0]}
                maxScale={[w / 5, w / 5]}
                grayscale={0}
            />
            <HomeItem
                url="/proto/home/10/10.jpeg"
                scale={[w/8, w / 4, 1]}
                position={[w / 2.75, 0.5, 0]}
                maxScale={[w/4.5, w/4]}
                grayscale={0}
            />

            {/* Page 2 */}
            <HomeItem
                url="/proto/home/2/2.jpeg"
                scale={[w/8, w / 3, 1]}
                position={[w / 30, -h, 0]}
                maxScale={[w/8, w/5]}
                grayscale={1}
            />
            <HomeItem
                url="/proto/home/3/3.jpeg"
                scale={[w / 3, w / 5, 1]}
                position={[-w / 4, -h, 0]}
                maxScale={[w/3, w/4]}
                grayscale={1}
            />
            <HomeItem
                url="/proto/home/4/4.jpeg"
                scale={[w / 5, w / 5, 1]}
                position={[w / 3.5, -h * 1.2, 0]}
                maxScale={[w/4, w/4]}
                grayscale={1}
            />

            {/* Page 3 */}
            <HomeItem
                url="/proto/home/5/5.jpeg"
                scale={[w / 4, w / 6, 1]}
                position={[-w / 3, -h * 1.80, 0]}
                maxScale={[w/3.5, w/5]}
                grayscale={0}
            />
            <HomeItem
                url="/proto/home/7/7.jpeg"
                scale={[w / 4, w / 6, 1]}
                position={[-w / 3, -h* 2.30, 0]}
                maxScale={[w/3.5, w/5]}
                grayscale={0}
            />
            <HomeItem
                url="/proto/preview-images/9/9.jpeg"
                scale={[w / 4, w / 6, 1]}
                position={[-w/100 , -h * 1.80, 0]}
                maxScale={[w/3.5, w/5]}
                grayscale={0}
            />
            <HomeItem
                url="/proto/preview-images/11/11.jpeg"
                scale={[w / 4, w / 6, 1]}
                position={[-w / 100, -h * 2.30, 0]}
                maxScale={[w/3.5, w/5]}
                grayscale={0}
            />
            <HomeItem
                url="/proto/home/6/6.jpeg"
                scale={[w / 4, w / 6, 1]}
                position={[w / 3.25, -h * 2, 0]}
                maxScale={[w/3.5, w/5]}
                grayscale={0}
            />
        </Scroll>
    )
}