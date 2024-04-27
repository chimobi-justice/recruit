import { Skeleton as AntSkeleton } from "antd"

const Skeleton = () => {
    const skeletons = Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="my-8">
            <div>
                <AntSkeleton.Input
                    active={true}
                    block={true}
                    size="default"
                    style={{ height: '140px' }}
                />
            </div>
        </div>
    ));

    return <>{skeletons}</>;
};

export default Skeleton;