const input = {
	botEngine: {
		stories: [
			{
				id: '5b05674601109700074286e4',
				name: 'Offline form',
				__typename: 'BotEngineStories',
			},
		],
		apiKey: '12123123123',
		__typename: 'BotEngineSettings',
	},
	escalations: {
		webhooks: ['https://skata.nafas.com/', 'https://fraoules.com/'],
		__typename: 'EscalationsSettings',
	},
	liveChat: {
		license: 'adsfasdfasdf',
		group: 200,
		apiUrl: 'https://api.livechatinc.com/',
		credentials: {
			apiKey: '123123123',
			email: 'test@mail.com',
			__typename: 'LivechatCredentials',
		},
		__typename: 'LiveChat',
	},
	name: 'Test account',
	qnaMaker: {
		kbUrl: 'https://url.com',
		apiKey: '123123123',
		__typename: 'QnaMakerSettings',
	},
	slug: 'test_account',
	__typename: 'AccountSettings',
};

const expected = {
	botEngine: {
		stories: [
			{
				id: '5b05674601109700074286e4',
				name: 'Offline form',
			},
		],
		apiKey: '12123123123',
	},
	escalations: {
		webhooks: ['https://skata.nafas.com/', 'https://fraoules.com/'],
	},
	liveChat: {
		license: 'adsfasdfasdf',
		group: 200,
		apiUrl: 'https://api.livechatinc.com/',
		credentials: {
			apiKey: '123123123',
			email: 'test@mail.com',
		},
	},
	name: 'Test account',
	qnaMaker: {
		kbUrl: 'https://url.com',
		apiKey: '123123123',
	},
	slug: 'test_account',
};

const arrayInput = [
	{
		name: 'Support Escalation Form',
		__typename: 'EscalationsSettingsFormNameValueType',
		fields: [
			{
				name: 'Full name',
				widget: 'text',
				attributes: [
					{
						name: 'required',
						value: 'true',
						__typename: 'EscalationsSettingsFormNameValueType',
					},
					{
						name: 'type',
						value: 'text',
						__typename: 'EscalationsSettingsFormNameValueType',
					},
				],
				__typename: 'EscalationsSettingsFieldsType',
			},
		],
	},
	{
		name: 'Support Escalation Form',
		__typename: 'EscalationsSettingsFormNameValueType',
		fields: [
			{
				name: 'Full name',
				widget: 'text',
				attributes: [
					{
						name: 'required',
						value: 'true',
						__typename: 'EscalationsSettingsFormNameValueType',
					},
					{
						name: 'type',
						value: 'text',
						__typename: 'EscalationsSettingsFormNameValueType',
					},
				],
				__typename: 'EscalationsSettingsFieldsType',
			},
		],
	},
];

const multiKeyArrayInput = [
	{
		name: 'Support Escalation Form',
		__typename: 'EscalationsSettingsFormNameValueType',
		fields: [
			{
				name: 'Full name',
				widget: 'text',
				attributes: [
					{
						name: 'required',
						value: 'true',
						__typename: 'EscalationsSettingsFormNameValueType',
					},
					{
						name: 'type',
						value: 'text',
						__typename: 'EscalationsSettingsFormNameValueType',
					},
				],
				__typename: 'EscalationsSettingsFieldsType',
				label: 'EscalationsSettingsFieldsType',
			},
		],
	},
	{
		name: 'Support Escalation Form',
		__typename: 'EscalationsSettingsFormNameValueType',
		fields: [
			{
				name: 'Full name',
				widget: 'text',
				attributes: [
					{
						name: 'required',
						value: 'true',
						__typename: 'EscalationsSettingsFormNameValueType',
					},
					{
						name: 'type',
						value: 'text',
						__typename: 'EscalationsSettingsFormNameValueType',
					},
				],
				label: 'EscalationsSettingsFieldsType',
				__typename: 'EscalationsSettingsFieldsType',
			},
		],
	},
];

const expectedArray = [
	{
		name: 'Support Escalation Form',
		fields: [
			{
				name: 'Full name',
				widget: 'text',
				attributes: [
					{
						name: 'required',
						value: 'true',
					},
					{
						name: 'type',
						value: 'text',
					},
				],
			},
		],
	},
	{
		name: 'Support Escalation Form',
		fields: [
			{
				name: 'Full name',
				widget: 'text',
				attributes: [
					{
						name: 'required',
						value: 'true',
					},
					{
						name: 'type',
						value: 'text',
					},
				],
			},
		],
	},
];

module.exports = {
	input,
	expected,
	arrayInput,
	multiKeyArrayInput,
	expectedArray,
};
