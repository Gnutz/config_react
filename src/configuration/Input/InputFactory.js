class InputFactory {
	constructor() {
		this.inputFactoryMapper = new InputFactoryMapper();
	}

	create({ input }) {
		const { type } = input;
		const factory = this.inputFactoryMapper.factory(type);
		return factory.create({ input });
	}
}

export default InputFactory;
