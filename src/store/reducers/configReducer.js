const initialState = {
	templates: [
		{
			Id: 1,
			SceneIdentifier: "Green_Market",
			Hooks: [
				{
					Description: "",
					Id: 0,
					Name: "AudioHook",
					Options: [
						{
							Description: "Volume of the sound",
							Data: null,
							Type: "Single",
							Name: "volume",
						},
						{
							Description:
								"Do you want the sound to appear as 3D? Between 0-1 0 is 2D and 1 is 3D",
							Data: null,
							Name: "spartialBlend",
							Type: "Single",
						},
						{
							Data: null,
							Name: "minDistance",
							Type: "Single",
							Description: "Minimum distance to hear the sound",
						},
						{
							Name: "maxDistance",
							Description: "Maximum distance where you can hear the sound",
							Type: "Single",
							Data: null,
						},
						{
							Data: null,
							Name: "loop",
							Description: "Do you want the music to loop?",
							Type: "Boolean",
						},
						{
							Name: "source",
							Desscription: "Select the audio",
							Type: "string",
							Data: null,
							available: ["First", "Second"],
						},
					],
				},
			],
		},
	],
};

const configReducer = (state = initialState, action) => {
	return state;
};
export default configReducer;
