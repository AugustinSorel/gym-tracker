import { SendVerificationRequestParams } from "next-auth/providers";
import { createTransport } from "nodemailer";
import theme from "src/styles/theme";

export const sendVerificationRequest = async (
  params: SendVerificationRequestParams
) => {
  const { identifier, url, provider } = params;
  const { host } = new URL(url);

  const transport = createTransport(provider.server);
  const result = await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: `Sign in to ${host}`,
    text: text({ url, host }),
    html: html({ url, host }),
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }
};

const html = (params: { url: string; host: string }) => {
  const { url, host } = params;

  const escapedHost = host.replace(/\./g, "&#8203;.");

  return `
  <body style="background: ${"#fff"};"> <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${
    theme.colors[900]
  }; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center" style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${
        theme.colors[100]
      };">
        Sign in to <strong>${escapedHost}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${
              theme.colors.action
            }"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${"#fff"}; text-decoration: none; border-radius: 5px; padding: 10px 20px; display: inline-block; font-weight: bold;">Sign in</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${
        theme.colors[500]
      };">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>
`;
};

const text = ({ url, host }: { url: string; host: string }) => {
  return `Sign in to ${host}\n${url}\n\n`;
};
