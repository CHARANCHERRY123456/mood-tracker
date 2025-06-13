// /utils/moods.ts
export type MoodType = {
    mood : 'happy' | 'neutral' | 'sad';
    comment? : string;
    timestamp : string;
};

export const moods: MoodType[] = [];

export function addMood(entry : Omit<MoodType , 'timestamp'>) {
    moods.push({
        ...entry,
        timestamp : new Date().toISOString(),
    });
}

export function getMoods(){
    return moods;
}