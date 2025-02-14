export type Dialect = {
  "version": "0.1.6",
  "name": "dialect",
  "instructions": [
    {
      "name": "createMetadata",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "metadataNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "closeMetadata",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "metadataNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createDialect",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "member0",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "member1",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dialect",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "dialectNonce",
          "type": "u8"
        },
        {
          "name": "encrypted",
          "type": "bool"
        },
        {
          "name": "scopes",
          "type": {
            "array": [
              {
                "array": [
                  "bool",
                  2
                ]
              },
              2
            ]
          }
        }
      ]
    },
    {
      "name": "closeDialect",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "dialect",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "dialectNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "subscribeUser",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dialect",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "dialectNonce",
          "type": "u8"
        },
        {
          "name": "metadataNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "sendMessage",
      "accounts": [
        {
          "name": "sender",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "dialect",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "dialectNonce",
          "type": "u8"
        },
        {
          "name": "text",
          "type": "bytes"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "metadataAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "subscriptions",
            "type": {
              "array": [
                {
                  "defined": "Subscription"
                },
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "dialectAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "members",
            "type": {
              "array": [
                {
                  "defined": "Member"
                },
                2
              ]
            }
          },
          {
            "name": "messages",
            "type": {
              "defined": "CyclicByteBuffer"
            }
          },
          {
            "name": "lastMessageTimestamp",
            "type": "u32"
          },
          {
            "name": "encrypted",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CyclicByteBuffer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "readOffset",
            "type": "u16"
          },
          {
            "name": "writeOffset",
            "type": "u16"
          },
          {
            "name": "itemsCount",
            "type": "u16"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                8192
              ]
            }
          }
        ]
      }
    },
    {
      "name": "Subscription",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "type": "publicKey"
          },
          {
            "name": "enabled",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Member",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "publicKey",
            "type": "publicKey"
          },
          {
            "name": "scopes",
            "type": {
              "array": [
                "bool",
                2
              ]
            }
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "DialectCreatedEvent",
      "fields": [
        {
          "name": "dialect",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "members",
          "type": {
            "array": [
              "publicKey",
              2
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "DialectDeletedEvent",
      "fields": [
        {
          "name": "dialect",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "members",
          "type": {
            "array": [
              "publicKey",
              2
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "MessageSentEvent",
      "fields": [
        {
          "name": "dialect",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "sender",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "UserSubscribedEvent",
      "fields": [
        {
          "name": "metadata",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "dialect",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "MetadataCreatedEvent",
      "fields": [
        {
          "name": "metadata",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "MetadataDeletedEvent",
      "fields": [
        {
          "name": "metadata",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "DialectOwnerIsNotAdmin",
      "msg": "The dialect owner must be a member with admin privileges"
    }
  ]
};

export const IDL: Dialect = {
  "version": "0.1.6",
  "name": "dialect",
  "instructions": [
    {
      "name": "createMetadata",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "metadataNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "closeMetadata",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "metadataNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createDialect",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "member0",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "member1",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dialect",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "dialectNonce",
          "type": "u8"
        },
        {
          "name": "encrypted",
          "type": "bool"
        },
        {
          "name": "scopes",
          "type": {
            "array": [
              {
                "array": [
                  "bool",
                  2
                ]
              },
              2
            ]
          }
        }
      ]
    },
    {
      "name": "closeDialect",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "dialect",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "dialectNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "subscribeUser",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dialect",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "dialectNonce",
          "type": "u8"
        },
        {
          "name": "metadataNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "sendMessage",
      "accounts": [
        {
          "name": "sender",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "dialect",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "dialectNonce",
          "type": "u8"
        },
        {
          "name": "text",
          "type": "bytes"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "metadataAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "subscriptions",
            "type": {
              "array": [
                {
                  "defined": "Subscription"
                },
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "dialectAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "members",
            "type": {
              "array": [
                {
                  "defined": "Member"
                },
                2
              ]
            }
          },
          {
            "name": "messages",
            "type": {
              "defined": "CyclicByteBuffer"
            }
          },
          {
            "name": "lastMessageTimestamp",
            "type": "u32"
          },
          {
            "name": "encrypted",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CyclicByteBuffer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "readOffset",
            "type": "u16"
          },
          {
            "name": "writeOffset",
            "type": "u16"
          },
          {
            "name": "itemsCount",
            "type": "u16"
          },
          {
            "name": "buffer",
            "type": {
              "array": [
                "u8",
                8192
              ]
            }
          }
        ]
      }
    },
    {
      "name": "Subscription",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "type": "publicKey"
          },
          {
            "name": "enabled",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Member",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "publicKey",
            "type": "publicKey"
          },
          {
            "name": "scopes",
            "type": {
              "array": [
                "bool",
                2
              ]
            }
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "DialectCreatedEvent",
      "fields": [
        {
          "name": "dialect",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "members",
          "type": {
            "array": [
              "publicKey",
              2
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "DialectDeletedEvent",
      "fields": [
        {
          "name": "dialect",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "members",
          "type": {
            "array": [
              "publicKey",
              2
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "MessageSentEvent",
      "fields": [
        {
          "name": "dialect",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "sender",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "UserSubscribedEvent",
      "fields": [
        {
          "name": "metadata",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "dialect",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "MetadataCreatedEvent",
      "fields": [
        {
          "name": "metadata",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "MetadataDeletedEvent",
      "fields": [
        {
          "name": "metadata",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "DialectOwnerIsNotAdmin",
      "msg": "The dialect owner must be a member with admin privileges"
    }
  ]
};
