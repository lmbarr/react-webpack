export const schema = {
    "type": "object",
    "properties": {
        "habits": {
            "type": "array",
            "minItems": 6,
            "maxItems": 8,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 1
                    },
                    "name": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "tracking": {
                        "type": "boolean",
                        "faker": "random.boolean"
                    },
                    "creationDate": {
                        "type": "string",
                        "format": "pastDate"
                    },
                    "unit": {
                        "type": "string",
                        "format": "pickone"
                        },
                    "quantity": {
                        "type": "array",
                        "minItems": 12,
                        "maxItems": 20,
                        "items": {
                            "date": {
                                "type": "string",
                                "format": "pastDate"
                            },
                            "quantity": {
                                "type": "integer",
                                "minimum": 12,
                                "maximum": 40
                            }
                        }
                    }
                },
                "required": ["id", "name", "tracking", "creationDate", "unit", "quantity"]
            }
        }
    },
    "required": ["habits"]
};
