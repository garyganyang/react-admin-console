import {FunctionComponent} from 'react';
import {Skeleton} from 'antd';

const SkeletonFC: FunctionComponent = () => {
    return (
        <>
            <Skeleton active/>
            <Skeleton active/>
            <Skeleton active/>
            <Skeleton active/>
            <Skeleton active/>
        </>
    );
}

export default SkeletonFC;
