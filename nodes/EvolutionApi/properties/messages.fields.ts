import { INodeProperties } from 'n8n-workflow';

export const messagesFields: INodeProperties[] = [
	// Fields = Send text message
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',

		description: 'Enter the name of the instance that will send the message',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Recipient RemoteJid',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'messageText',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the text message to be sent',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID of the message that will be replied to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers To Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'List of numbers to mention (separated by comma)',
							},
						],
					},
				],
			},
			{
				displayName: 'Link Preview',
				name: 'linkPreview',
				type: 'boolean',
				default: true,
				description: 'Whether to enable or disable link preview in the message',
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},

	// Fields = Send Image
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the message',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Image',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL or base64 of the image',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Text to be sent along with the image',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID of the message that will be replied to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers To Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'List of numbers to mention (separated by comma)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},

	// Fields = Send Video
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Video',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL or base64 of the video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Text to be sent along with the video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID of the message that will be replied to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers To Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter the numbers you want to mention separated by commas (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},

	// Fields = Send Audio
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the audio',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},
	{
		displayName: 'Audio',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL or base64 of the audio',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			//{
			//	displayName: 'Reply Message',
			//	name: 'quoted',
			//	type: 'fixedCollection',
			//	typeOptions: {
			//		multipleValues: false,
			//	},
			//	default: {
			//		messageQuoted: {
			//			messageId: '',
			//		},
			//	},
			//	options: [
			//		{
			//			name: 'messageQuoted',
			//			displayName: 'Message',
			//			values: [
			//				{
			//					displayName: 'Message ID',
			//					name: 'messageId',
			//					type: 'string',
			//					default: '',
			//					description: 'ID of the message that will be replied to',
			//				},
			//			],
			//		},
			//	],
			//},

			//{
			//	displayName: 'Mentions',
			//	name: 'mentions',
			//	type: 'fixedCollection',
			//	typeOptions: {
			//		multipleValues: false,
			//	},
			//	default: {
			//		mentionsSettings: {
			//			mentionsEveryOne: false,
			//			mentioned: '',
			//		},
			//	},
			//	options: [
			//		{
			//			name: 'mentionsSettings',
			//			displayName: 'Settings',
			//			values: [
			//				{
			//					displayName: 'Mention Everyone',
			//					name: 'mentionsEveryOne',
			//					type: 'boolean',
			//					default: false,
			//					description: 'Mentions all participants in the group',
			//				},
			//				{
			//					displayName: 'Numbers to Mention',
			//					name: 'mentioned',
			//					type: 'string',
			//					default: '',
			//					displayOptions: {
			//						show: {
			//							mentionsEveryOne: [false],
			//						},
			//					},
			//					description: 'Enter the numbers you want to mention separated by commas (ex: 5511999999999,5511888888888)',
			//				},
			//			],
			//		},
			//	],
			//},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},

	// Fields = Send Document
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Document',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL or base64 of the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Text to be sent along with the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: 'document.pdf',

		description: 'File name of the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID of the message that will be replied to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers To Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter the numbers you want to mention separated by commas (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},

	// Fields = Send Poll
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the poll',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Poll Title',
		name: 'caption',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the title of your poll',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Minimum 2 options, Maximum 12. Each option must be unique.',
		name: 'notice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Poll Options',
		name: 'options_display',
		type: 'fixedCollection',
		default: { metadataValues: [] },
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		description: 'Enter the poll options (minimum 2, maximum 12). Each option must be unique.',
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				values: [
					{
						displayName: 'Option',
						name: 'optionValue',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID of the message that will be replied to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers To Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter the numbers you want to mention separated by commas (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},

	// Fields = Send Status
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the status',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Status Type',
		name: 'type',
		type: 'options',
		description: 'Choose the type of status you will post',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
		options: [
			{
				name: 'Text Status',
				value: 'text',
			},
			{
				name: 'Image Status',
				value: 'image',
			},
			{
				name: 'Video Status',
				value: 'video',
			},
			{
				name: 'Audio Status',
				value: 'audio',
			},
		],
		default: 'text',
	},
	{
		displayName: 'Content Or URL',
		name: 'content',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the content or URL of the image/video/audio to be posted',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Text For Image/Video Status',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Enter the text for Image/Video status',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Background Color',
		name: 'backgroundColor',
		type: 'color',
		default: '#000000',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Text Font',
		name: 'font',
		type: 'options',
		description: 'Choose the font type of your text',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
		options: [
			{
				name: 'SERIF',
				value: 1,
			},
			{
				name: 'NORICAN REGULAR',
				value: 2,
			},
			{
				name: 'BRYNDAN WRITE',
				value: 3,
			},
			{
				name: 'BEBASNEUE REGULAR',
				value: 4,
			},
			{
				name: 'OSWALD HEAVY',
				value: 5,
			},
		],
		default: 1,
	},

	// Fields = Send Document
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Document',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL or base64 of the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Text to be sent along with the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: 'document.pdf',

		description: 'File name of the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID of the message that will be replied to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers To Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter the numbers you want to mention separated by commas (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},

	// Fields = Send Contact
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the contact',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
			},
		},
	},
	{
		displayName: 'Contacts',
		name: 'contacts',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: { contactValues: [] },
		options: [
			{
				name: 'contactValues',
				displayName: 'Contact',
				values: [
					{
						displayName: 'Full Name',
						name: 'fullName',
						type: 'string',
						default: '',
						required: true,
						description: 'Full name of the contact',
					},
					{
						displayName: 'WhatsApp Number',
						name: 'wuid',
						type: 'string',
						default: '',
						required: true,
						description: 'WhatsApp number (only numbers, ex: 559999999999)',
					},
					{
						displayName: 'Formatted Number',
						name: 'phoneNumber',
						type: 'string',
						default: '',
						required: true,
						description: 'Formatted number (ex: +55 99 9 9999-9999)',
					},
					{
						displayName: 'Organization',
						name: 'organization',
						type: 'string',
						default: '',
						description: 'Name of the organization/company',
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						placeholder: 'name@email.com',
						default: '',
						description: 'Email address of the contact',
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						description: 'URL of the contact page',
					},
				],
			},
		],
		description: 'List of contacts to send',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
			},
		},
	},

	// Fields = Send List
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the list',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'Title of the list',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		description: 'Description of the list',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Button Text',
		name: 'buttonText',
		type: 'string',
		default: 'View Options',
		required: true,
		description: 'Text to appear on the button of the list',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Footer Text',
		name: 'footerText',
		type: 'string',
		default: '',
		required: true,
		description: 'Text to appear on the footer of the list',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Sections',
		name: 'sections',
		placeholder: 'Add Section',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		options: [
			{
				name: 'sectionValues',
				displayName: 'Section',
				values: [
					{
						displayName: 'Title',
						name: 'title',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Rows',
						name: 'rows',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						options: [
							{
								name: 'rowValues',
								displayName: 'Row',
								values: [
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										required: true,
										description: 'Title of the row',
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Description of the row (Optional)',
									},
									{
										displayName: 'Row ID',
										name: 'rowId',
										type: 'string',
										default: '',
										description: 'Unique ID of the option',
									}
								]
							}
						]
					}
				]
			}
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		}
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID of the message that will be replied to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers To Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter the numbers you want to mention separated by commas (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},

	// Fields = Send Botões
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the buttons',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'Title of the message with buttons',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		description: 'Description of the message with buttons',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Footer',
		name: 'footer',
		type: 'string',
		default: '',
		//required: false,
		description: 'Text of the footer of the message',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Buttons',
		name: 'buttons',
		placeholder: 'Add Button',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
			maxValue: 3,
		},
		default: {},
		options: [
			{
				name: 'buttonValues',
				displayName: 'Button',
				values: [
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'Reply',
								value: 'reply',
							},
							{
								name: 'Copy',
								value: 'copy',
							},
							{
								name: 'URL',
								value: 'url',
							},
							{
								name: 'Call',
								value: 'call',
							},
						],
						default: 'reply',
					},
					{
						displayName: 'Button Text',
						name: 'displayText',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['reply'],
							},
						},
					},
					{
						displayName: 'Copy Code',
						name: 'copyCode',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['copy'],
							},
						},
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['url'],
							},
						},
					},
					{
						displayName: 'Phone Number',
						name: 'phoneNumber',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['call'],
							},
						},
					},
				],
			},
		],
		description: 'Buttons of the message (maximum 3)',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},

	// Fields = Send PIX
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the PIX',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Beneficiary Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'Name of the PIX beneficiary',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Key Type',
		name: 'keyType',
		type: 'options',
		options: [
			{
				name: 'Phone',
				value: 'phone',
			},
			{
				name: 'Email',
				value: 'email',
			},
			{
				name: 'CPF',
				value: 'cpf',
			},
			{
				name: 'CNPJ',
				value: 'cnpj',
			},
			{
				name: 'Random',
				value: 'random',
			},
		],
		default: 'email',
		required: true,
		description: 'Type of PIX key',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'PIX Key',
		name: 'key',
		type: 'string',
		default: '',
		required: true,
		description: 'PIX key of the beneficiary',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Send to All',
		name: 'allContacts',
		type: 'boolean',
		default: false,
		description: 'Whether to send status to all contacts',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Contact List',
		name: 'statusJidList',
		type: 'string',
		default: '',
		required: true,
		description: 'List of contacts to receive the status (separated by comma)',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
				allContacts: [false],
			},
		},
	},

	// Fields = Reagir Mensagem
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Chat Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Number of the chat where the message is',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		description: 'ID of the message to receive the reaction',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Own Message',
		name: 'fromMe',
		type: 'boolean',
		default: true,
		description: 'Whether this is your own message',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Reaction Emoji',
		name: 'reaction',
		type: 'string',
		default: '👍',
		required: true,
		description: 'Emoji to be used as reaction',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	}
];
