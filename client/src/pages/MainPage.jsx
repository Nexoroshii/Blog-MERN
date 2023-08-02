import React from 'react';
import { PostItem } from '../components/PostItem';
import { PopularPosts } from '../components/PopularPosts';
import { useDispatch, useSelector } from 'react-redux';

export const MainPage = () => {
    const dispatch = useDispatch();
    const { posts, popularPosts } = useSelector((state) => state.post);

    return (
        <div className="max-w-[900px] mx-auto py-10">
            <div className="flex justify-between gap-8">
                <div className="flex flex-col gap-10 basis-4/5">
                    <PostItem />
                </div>
                <div className="basis-1/5">
                    <div className="text-xs uppercase text-white">
                        Популярное
                    </div>
                    <PopularPosts />
                </div>
            </div>
        </div>
    );
};
