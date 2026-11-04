/** Firefox rejects data: icon URLs in notifications; use a packaged PNG. */
export async function showNotification(title: string, message: string) {
  const iconUrl = browser.runtime.getURL('icons/128.png');
  const id = `bookmarkhub-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  try {
    await browser.notifications.create(id, {
      type: 'basic',
      iconUrl,
      title,
      message,
    });
  } catch (error) {
    try {
      await browser.notifications.create(id, {
        type: 'basic',
        title,
        message,
      });
    } catch (fallbackError) {
      console.error('Notification failed', fallbackError || error);
    }
  }
}
