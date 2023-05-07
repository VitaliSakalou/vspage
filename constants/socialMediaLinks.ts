export type SocialMediaName = 'linkedin' | 'github';
type SocialMediaInfo = { url: string; key: SocialMediaName };

const socialMedia: Record<SocialMediaName, SocialMediaInfo> = {
	linkedin: {
		url: 'https://www.linkedin.com/in/vitali-sakalou/',
		key: 'linkedin',
	},
	github: { url: 'https://github.com/VitaliSakalou', key: 'github' },
};
export default socialMedia;
