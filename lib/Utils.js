
export function decodeJid(jid = '') {
  if (!jid) return jid;
  if (/:\d+@/.test(jid)) return jid;
  if (jid.endsWith('@g.us') || jid.endsWith('@s.whatsapp.net')) return jid;
  return jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
}


export function jidDecode(jid = '') {
  try {
    const decode = jid?.split('@')[0]?.split(':');
    if (decode.length === 2) {
      return { user: decode[0], server: decode[1] };
    }
    return { user: jid.split('@')[0], server: jid.split('@')[1] };
  } catch {
    return null;
  }
}

export async function getMessage(key, store) {
  return store?.loadMessage?.(key.remoteJid, key.id) || {};
}
