export const emailCampaigns = {
  getData() {
    return [
      {
        id: 1,
        label: "Marketing Campaign 1",
        sent: 520,
        clicked: 39,
        clickedRatio: 19.8,
        opened: 202,
        openedRatio: 39.5,
        replied: 12,
        repliedRatio: 13.8,
        positive: 0.0,
        positiveRatio: 0.0,
        sentDate: "5 Apr 2023",
        sequence: 5,
        error: false
      },
      {
        id: 2,
        label: "Sales Outreach 2",
        sent: 315,
        clicked: 22,
        clickedRatio: 7.0,
        opened: 120,
        openedRatio: 38.1,
        replied: 9,
        repliedRatio: 7.4,
        positive: 0.0,
        positiveRatio: 0.0,
        sentDate: "20 Jun 2023",
        sequence: 3,
        error: true,
        status: "edit"
      },
      {
        id: 3,
        label: "Product Newsletter",
        sent: 421,
        clicked: 31,
        clickedRatio: 17.7,
        opened: 155,
        openedRatio: 36.8,
        replied: 14,
        repliedRatio: 10.4,
        positive: 0.0,
        positiveRatio: 0.0,
        sentDate: "10 Aug 2023",
        sequence: 7,
        error: false
      },
      {
        id: 4,
        label: "Customer Survey",
        sent: 499,
        clicked: 42,
        clickedRatio: 20.2,
        opened: 190,
        openedRatio: 38.1,
        replied: 11,
        repliedRatio: 9.5,
        positive: 0.0,
        positiveRatio: 0.0,
        sentDate: "25 Oct 2023",
        sequence: 4,
        error: false,
        status: "warning"
      },
      {
        id: 5,
        label: "Promotional Announcement",
        sent: 375,
        clicked: 29,
        clickedRatio: 7.7,
        opened: 145,
        openedRatio: 38.7,
        replied: 13,
        repliedRatio: 11.2,
        positive: 0.0,
        positiveRatio: 0.0,
        sentDate: "15 Dec 2023",
        sequence: 6,
        error: false
      },
      {
        id: 6,
        label: "Webinar Invitation",
        sent: 462,
        clicked: 38,
        clickedRatio: 16.4,
        opened: 180,
        openedRatio: 38.9,
        replied: 10,
        repliedRatio: 9.7,
        positive: 0.0,
        positiveRatio: 0.0,
        sentDate: "8 Feb 2024",
        sequence: 2,
        error: false,
        status: "edit"
      },
      {
        id: 7,
        label: "New Product Announcement",
        sent: 388,
        clicked: 25,
        clickedRatio: 6.4,
        opened: 135,
        openedRatio: 34.8,
        replied: 8,
        repliedRatio: 5.9,
        positive: 0.0,
        positiveRatio: 0.0,
        sentDate: "2 Apr 2024",
        sequence: 8,
        error: false,
        status: "error"
      },
      {
        id: 8,
        label: "Event Invitation",
        sent: 437,
        clicked: 35,
        clickedRatio: 11.7,
        opened: 165,
        openedRatio: 37.8,
        replied: 15,
        repliedRatio: 13.5,
        positive: 0.0,
        positiveRatio: 0.0,
        sentDate: "19 May 2024",
        sequence: 1,
        error: false
      },
      {
        id: 9,
        label: "Company Announcement",
        sent: 502,
        clicked: 44,
        clickedRatio: 17.5,
        opened: 205,
        openedRatio: 40.8,
        replied: 12,
        repliedRatio: 11.3,
        positive: 0.0,
        positiveRatio: 0.0,
        sentDate: "13 Jul 2024",
        sequence: 9,
        error: false
      },
      {
        id: 10,
        label: "Survey Improvement",
        sent: 444,
        clicked: 33,
        clickedRatio: 13.8,
        opened: 160,
        openedRatio: 36.0,
        replied: 11,
        repliedRatio: 9.2,
        positive: 0.0,
        positiveRatio: 0.0,
        sentDate: "6 Sep 2024",
        sequence: 10,
        error: false
      }
    ]
  },

  gatCampagins(searchText = "") {
    const data = this.getData()
    if (!searchText) return Promise.resolve(data)

    const filteredData = data.filter((campaign) => {
      return campaign.label.toLowerCase().includes(searchText.toLowerCase())
    })

    return Promise.resolve(filteredData)
  }
}
