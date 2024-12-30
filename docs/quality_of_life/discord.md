---
sidebar_position: 1
---
# Discord Linking
![Discord](/img/doc/quality_of_life/discord/DiscordLinking.svg)
:::info What is Discord Linking?
Discord Linking allows you to send text messages from Discord directly to the in-game chat.
:::

## Linking Process

Follow these steps to link your Discord account:

1. **Generate a Link Code**

   Use the following command in-game:
   ```
   /discord account link
   ```

   You will receive command and code. It should look something like this:

   

2. **Use command to channel #bot on Discord Server**

   :::tip
   find channel **#bot** on Discord server.
   :::
   
   ```
   /account link code:[code]
   ```
   Use commands received in channel **#bot** on Discord server.

3. **Confirmation**

   If successful, the bot will reply with a message similar to:

   ```
   "Successfully linked your Discord account to the Minecraft account (Username)"
   ```

   This message confirms that your account is now linked.

## Verifying Your Link Status

You can check if your Discord account is linked at any time:

1. Use the following command in-game:
   ```
   /discord account
   ```

2. The system will show Discord Account status GUI:

   **If linked:**
   > <font color="green">Account Linked</font>
   >>"Account is linked to Discord [Username]

   **If not linked:**
      > <font color="blue">Link Discord Account</font>

:::caution
Make sure to keep your link code private. Anyone with access to this code could potentially link their Discord account to your game account.
:::

## Troubleshooting

If you encounter any issues during the linking process:

1. Ensure you're using command in channel **#bot**.
2. Double-check that you've entered the link code correctly.
3. Try generating a new link code if the old one doesn't work.
4. If problems persist, contact a server administrator for assistance.

:::note
Remember, linking your Discord account enhances your gameplay experience by allowing cross-platform communication. Enjoy the seamless integration!
:::