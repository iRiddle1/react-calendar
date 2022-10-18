export const EVENT_PRIORITIES = [
  { slug: 'critical', title: 'Критичный' },
  { slug: 'high', title: 'Высокий' },
  { slug: 'medium', title: 'Средний' },
  { slug: 'low', title: 'Низкий' },
  { slug: 'none', title: 'Без приоритета' },
]

export const MOCK_EVENTS = {
  '2022-10-08': [
    { id: 1, type: 'critical', content: 'This is warning event.' },
    { id: 2, type: 'high', content: 'This is usual event.' },
    { id: 3, type: 'medium', content: 'This is usual event.' },
    { id: 4, type: 'low', content: 'This is usual event.' },
    { id: 5, type: 'none', content: 'This is usual event.' },
  ],
  '2022-10-07': [
    { id: 1, type: 'critical', content: 'This is warning event.' },
    { id: 2, type: 'high', content: 'This is usual event.' },
    { id: 3, type: 'medium', content: 'This is usual event.' },
    { id: 4, type: 'low', content: 'This is usual event.' },
    { id: 5, type: 'none', content: 'This is usual event.' },
  ]
}