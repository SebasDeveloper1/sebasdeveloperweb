/* eslint-disable import/no-anonymous-default-export */
/** @type {import('next').NextConfig} */
import withVideos from 'next-videos';

const nextConfig = {};

export default {
  ...nextConfig,
  ...withVideos(),
};
