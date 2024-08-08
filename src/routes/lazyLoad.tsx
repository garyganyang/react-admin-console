import { LazyExoticComponent, Suspense } from "react";
import SkeletonFC from "/src/components/skeleton";
/**
 * 实现路由懒加载
 * @param Comp 懒加载组件
 * @returns
 */
function lazyLoad(Comp: LazyExoticComponent<any>) {
    return (
        <Suspense fallback={<SkeletonFC />}>
            <Comp />
        </Suspense>
    );
}

export default lazyLoad;
