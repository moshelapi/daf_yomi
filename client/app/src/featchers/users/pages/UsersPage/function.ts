import { aG } from "vitest/dist/reporters-rzC174PQ.js";
import { User } from "../../utils/interfaces/interface";

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; 
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; 
}

export function addUserDistance(users: User[], lat: number, lon: number) {
  return users.map(user => ({
    ...user,
    distance: parseFloat(calculateDistance(lat, lon, user.latitude, user.longitude).toFixed(1))  }));
}

export function findMinAndDistance(users: User[]): number []{
  if (!users) return []
  const distance  = users.map(user => user.distance) as number []
  const min = Math.min(...distance)
  const max = Math.max(...distance)
  return [min , max]}


export function findMinAndMaxAge(users: User[]): number[]{
  if (!users) return []
  const ages  = users.map(user => user.age)
  const min = Math.min(...ages)
  const max = Math.max(...ages)
  return [min , max]
}