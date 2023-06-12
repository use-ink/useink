#![cfg_attr(not(feature = "std"), no_std)]

#[ink::contract]
mod playground {
    use ink::prelude::string::String;

    /// Defines the storage of your contract.
    /// Add new fields to the below struct in order
    /// to add new static storage fields to your contract.
    #[ink(storage)]
    pub struct Playground {
        /// Stores a single `bool` value on the storage.
        value: bool,
    }

    #[ink(event)]
    pub struct Flipped {
        /// The user account ID.
        flipper: AccountId,
        /// The new value.
        value: bool,
    }

    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub struct Unhappy {
        mood: ink::prelude::string::String,
    }

    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub struct Happy {
        mood: String,
    }

    // The Playground error types.
    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        BadMood(Unhappy),
    }

    impl Playground {
        /// Constructor that initializes the `bool` value to the given `init_value`.
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { value: init_value }
        }

        /// Constructor that initializes the `bool` value to `false`.
        ///
        /// Constructors can delegate to other constructors.
        #[ink(constructor)]
        pub fn default() -> Self {
            Self::new(Default::default())
        }

        /// A message that can be called on instantiated contracts.
        /// This one flips the value of the stored `bool` from `true`
        /// to `false` and vice versa.
        #[ink(message)]
        pub fn flip(&mut self) -> bool {
            self.value = !self.value;

            Self::env().emit_event(Flipped {
                flipper: Self::env().caller(),
                value: self.value,
            });

            self.value
        }

        /// Simply returns the current value of our `bool`.
        #[ink(message)]
        pub fn get(&self) -> bool {
            self.value
        }

        /// panic! in Rust will throw a 'Module' Dispatch error in PolkadotJS
        #[ink(message)]
        pub fn panic(&self) -> bool {
            panic!("Panic!!!");
        }

        #[ink(message)]
        pub fn assert_boom(&self) -> bool {
            assert!(false, "Assertion go boom!");
            true
        }

        #[ink(message)]
        pub fn result(&self) -> bool {
            assert!(false, "Assertion go boom!");
            true
        }

        #[ink(message)]
        pub fn mood(&self, value: u64) -> Result<Happy, Error> {
            if value % 2 == 0 {
                return Ok(Happy {
                    mood: String::from("Even numbers make me happy :)"),
                });
            }

            Err(Error::BadMood(Unhappy {
                mood: String::from("Odd values make me sad :("),
            }))
        }

        #[ink(message)]
        pub fn option(&self, value: u64) -> Option<Happy> {
            if value % 2 == 0 {
                return Some(Happy {
                    mood: String::from("Even numbers make me happy :)"),
                });
            }
            None
        }
    }
}
